import { getUser } from '@/bff/integrations/user/getUsers';
import { prismaMock } from '@/utils/jest/singleton';

xdescribe('getUser', () => {
  const date: Date = new Date();

  it('should return an array of users', async () => {
    const mockUsers = [
      {
        id: 1,
        name: 'André',
        email: 'andrepeixoto@gmail.com',
        createdAt: date,
        updatedAt: date,
      },
    ];
    prismaMock.user.findMany.mockResolvedValue(mockUsers);

    const result = await getUser();

    await expect(result).toEqual(mockUsers);
    await expect(prismaMock.user.findMany).toHaveBeenCalledTimes(1);
  });

  xit('should log the users', async () => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    (prismaMock.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const consoleSpy = jest.spyOn(console, 'log');

    await getUser();

    expect(consoleSpy).toHaveBeenCalledWith('users: ', mockUsers);
  });
});
